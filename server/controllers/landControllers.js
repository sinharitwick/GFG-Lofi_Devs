const Card = require('../models/landModel');

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({ error: 'An error occurred while fetching cards' });
  }
};

exports.addCard = async (req, res) => {
  const { location, price } = req.body;

  try {
    const newCard = await Card.create({ location, price });
    res.status(201).json(newCard);
  } catch (error) {
    console.error('Error adding card:', error);
    res.status(500).json({ error: 'An error occurred while adding the card' });
  }
};
