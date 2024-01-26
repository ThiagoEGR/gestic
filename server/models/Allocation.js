import mongoose from 'mongoose';

const AllocationSchema = new mongoose.Schema(
    {
        userId: String,
        cost: String,
        products : {
            type: [mongoose.Types.ObjectId],
            of: 'Number'
        }
    },
    { timestamps: true }
);

const Allocation = mongoose.model("Allocation", AllocationSchema);
export default Allocation;