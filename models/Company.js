import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  regulatoryDocs: { type: String, required: true },
});

export default mongoose.models.Company || mongoose.model("Company", CompanySchema);
