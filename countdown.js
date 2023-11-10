// Set the target date as 7 days from the current date
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7);

// Function to calculate and display the countdown
function countdown() {
  const currentDate = new Date();
  const remainingTime = targetDate - currentDate;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown
  console.log(`Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

  // Update the countdown every second
  setTimeout(countdown, 1000);
}

// Start the countdown
countdown(); 