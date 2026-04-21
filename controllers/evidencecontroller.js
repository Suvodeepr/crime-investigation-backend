import evidencemodel from "../models/evidence.js";

class evidencecontroller {

    static createdoc = async (req, res) => {
        try {
            const doc = new evidencemodel(req.body);
            const result = await doc.save();
            res.status(201).send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static getalldoc = async (req, res) => {
        try {
            const result = await evidencemodel.find();
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static getsingledocbyid = async (req, res) => {
        try {
            const result = await evidencemodel.findById(req.params.id);
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static updatedocbyid = async (req, res) => {
        try {
            const result = await evidencemodel.findByIdAndUpdate(req.params.id, req.body);
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static deletedocbyid = async (req, res) => {
        try {
            await evidencemodel.findByIdAndDelete(req.params.id);
            res.status(204).send();
        } catch (error) {
            console.log(error);
        }
    }
}

export default evidencecontroller;
