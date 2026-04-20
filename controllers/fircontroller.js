<<<<<<< HEAD
import firmodel from "../models/fir.js";

class fircontroller {

    // CREATE
    static createdoc = async (req, res) => {
        try {
            const { title, description, location, status } = req.body;

            const doc = new firmodel({
                title: title,
                description: description,
                location: location,
                status: status
            });

            const result = await doc.save();
            res.status(201).send(result);

        } catch (error) {
            console.log(error);
        }
    };

    // READ ALL
    static getalldoc = async (req, res) => {
        try {
            const result = await firmodel.find();
            res.send(result);

        } catch (error) {
            console.log(error);
        }
    };

    // READ SINGLE
    static getsingledocbyid = async (req, res) => {
        try {
            const result = await firmodel.findById(req.params.id);
            res.send(result);

        } catch (error) {
            console.log(error);
        }
    };

    // UPDATE
    static updatedocbyid = async (req, res) => {
        try {
            const result = await firmodel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.send(result);

        } catch (error) {
            console.log(error);
        }
    };

    // DELETE
    static deletedocbyid = async (req, res) => {
        try {
            await firmodel.findByIdAndDelete(req.params.id);
            res.status(204).send();

        } catch (error) {
            console.log(error);
        }
    };
}

=======
import firmodel from "../models/fir.js";

class fircontroller {

    // CREATE
    static createdoc = async (req, res) => {
        try {
            const { title, description, location, status } = req.body;

            const doc = new firmodel({
                title: title,
                description: description,
                location: location,
                status: status
            });

            const result = await doc.save();
            res.status(201).send(result);

        } catch (error) {
            console.log(error);
        }
    };

    // READ ALL
    static getalldoc = async (req, res) => {
        try {
            const result = await firmodel.find();
            res.send(result);

        } catch (error) {
            console.log(error);
        }
    };

    // READ SINGLE
    static getsingledocbyid = async (req, res) => {
        try {
            const result = await firmodel.findById(req.params.id);
            res.send(result);

        } catch (error) {
            console.log(error);
        }
    };

    // UPDATE
    static updatedocbyid = async (req, res) => {
        try {
            const result = await firmodel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.send(result);

        } catch (error) {
            console.log(error);
        }
    };

    // DELETE
    static deletedocbyid = async (req, res) => {
        try {
            await firmodel.findByIdAndDelete(req.params.id);
            res.status(204).send();

        } catch (error) {
            console.log(error);
        }
    };
}

>>>>>>> b143d3c2619de5e966c57a2675da4f77af42dd96
export default fircontroller;