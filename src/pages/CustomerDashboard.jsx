{
  // Update the Instructions Modal section in CustomerDashboard.jsx
  const instructionsModalContent = `
  <Modal
    isOpen={showInstructionsModal}
    onClose={() => setShowInstructionsModal(false)}
    title="Special Instructions"
  >
    <div className="space-y-4">
      <TextArea
        value={specialInstructions}
        onChange={(e) => setSpecialInstructions(e.target.value)}
        placeholder="Add any special instructions for your laundry (e.g., specific detergent preferences, stain locations, or handling instructions)"
        maxLength={300}
        className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
      />
      <button
        onClick={() => {
          // Here you would typically save the instructions
          toast.success('Instructions saved successfully');
          setShowInstructionsModal(false);
        }}
        className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600"
      >
        Save Instructions
      </button>
    </div>
  </Modal>
  `;
}