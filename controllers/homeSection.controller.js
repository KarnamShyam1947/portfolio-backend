const HomeSection = require("./../models/homeSection.model");

const getHomeSection = async (req, res) => {
    try {
        let homeSection = await HomeSection.findOne();
        if (!homeSection) {
            homeSection = await HomeSection.create({
                name: "Your Name",
                description: "Your Description",
                primaryButtonText: "Primary Button",
                primaryButtonLink: "/",
                secondaryButtonText: "Secondary Button",
                secondaryButtonLink: "/",
                typingPhrases: ["Phrase 1", "Phrase 2"]
            });
        }
        res.status(200).json(homeSection);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateHomeSection = async (req, res) => {
    try {
        const homeSection = await HomeSection.findOne();
        if (!homeSection) {
            // Should not happen if get is called first, but good to handle
            const newSection = await HomeSection.create(req.body);
            return res.status(200).json(newSection);
        }
        const updatedSection = await HomeSection.findByIdAndUpdate(homeSection._id, req.body, { new: true, runValidators: true });
        res.status(200).json(updatedSection);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteHomeSection = async (req, res) => {
    try {
        await HomeSection.findOneAndDelete();
        res.status(200).json({ message: "Home Section deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getHomeSection,
    updateHomeSection,
    deleteHomeSection
};
