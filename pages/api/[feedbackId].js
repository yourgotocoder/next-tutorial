import { getFeedbackData } from "./feedback";

function handler(req, res) {
  const { feedbackId } = req.query;
  const data = getFeedbackData();
  const selectedFeedback = data.find((item) => item.id === feedbackId);
  console.log(selectedFeedback)
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
