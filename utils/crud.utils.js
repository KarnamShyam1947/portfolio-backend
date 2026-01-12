const mongoose = require('mongoose');

const createOne = (Model, uniqueField) => async (req, res, next) => {
  try {
    // If uniqueField is provided, enforce uniqueness
    if (uniqueField && req.body[uniqueField]) {
      const exists = await Model.findOne({
        [uniqueField]: req.body[uniqueField],
      });

      if (exists) {
        return res.status(409).json({
          success: false,
          message: `${uniqueField} already exists`,
        });
      }
    }

    const doc = await Model.create(req.body);

    res.status(201).json({
      success: true,
      data: doc,
    });
  } catch (err) {
    next(err);
  }
};


const getAll = (Model) => async (req, res, next) => {
  try {
    const docs = await Model.find();
    res.status(200).json({ success: true, data: docs });
  } catch (err) {
    next(err);
  }
};

const getOne = (Model) => async (req, res, next) => {
  try {

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid Room ID format' });
    }

    const doc = await Model.findById(id);
    if (!doc) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ success: true, data: doc });
  } catch (err) {
    next(err);
  }
};

const updateOne = (Model) => async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const doc = await Model.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!doc) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ success: true, data: doc });
  } catch (err) {
    next(err);
  }
};

const deleteOne = (Model) => async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const doc = await Model.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ success: true, data: doc });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne
};
