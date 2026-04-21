import casemodel from "../models/case.js";

class casecontroller {

    static createdoc = async (req, res) => {
        try {
            const doc = new casemodel(req.body);
            const result = await doc.save();
            res.status(201).send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static getalldoc = async (req, res) => {
        try {
            const result = await casemodel.find();
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static getsingledocbyid = async (req, res) => {
        try {
            const result = await casemodel.findById(req.params.id);
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static updatedocbyid = async (req, res) => {
        try {
            const result = await casemodel.findByIdAndUpdate(req.params.id, req.body);
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static deletedocbyid = async (req, res) => {
        try {
            await casemodel.findByIdAndDelete(req.params.id);
            res.status(204).send();
        } catch (error) {
            console.log(error);
        }
    }
}

export default casecontroller;