// Timer
const targetDate = new Date("2025-02-02T00:00:00.000Z"); 
const currentDate = new Date();


const diff = targetDate.getTime() - currentDate.getTime();


const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);


function updateCountdown() {
  // Calculate the remaining time
  const remainingTime = targetDate.getTime() - new Date().getTime();

  
  const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the countdown timer display
  document.getElementById("days").innerHTML = `
    ${remainingDays}  
    
  `;
  document.getElementById("hours").innerHTML = `
  
  ${remainingHours}  
   
`; document.getElementById("minutes").innerHTML = `
 
${remainingMinutes}  

`; document.getElementById("seconds").innerHTML = `
  
${remainingSeconds} 
`;
  // Check if the countdown has finished
  if (remainingTime <= 0) {
    document.getElementById("countdown").innerHTML = "Countdown finished!";
  }
}


setInterval(updateCountdown, 1000);


updateCountdown();