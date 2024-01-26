import Project from "../models/Project.js";
import ProjectStat from "../models/ProjectStat.js";
import Allocation from "../models/Allocation.js";
import User from "../models/User.js";
import getCountryIso3 from "country-iso-2-to-3";

// OK
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    const projectsWithStats = await Promise.all(
      projects.map(async (product) => {
        const stat = await ProjectStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(projectsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// OK
export const getCollaborators = async (req, res) => {
  try {
    const collaborators = await User.find({ role: "user" }).select("-password");
    res.status(200).json(collaborators);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// OK
export const getAllocations = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const allocations = await Allocation.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Allocation.countDocuments({
      cost: { $regex: search, $options: "i" },
    });

    // Send response to the frontend
    res.status(200).json({
      allocations,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// getPartners
export const getPartners = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
