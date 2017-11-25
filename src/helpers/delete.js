function deleteHelper (sequence, deleteIndex) {
  return sequence.filter((_, i) => i !== deleteIndex);
}

export default deleteHelper;