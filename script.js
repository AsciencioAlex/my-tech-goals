window.onload = function() {
    // Set your Slack details
    const slackDisplayName = "Alex Asciencio";
    const slackEmail = "asciencioalex@gmail.com";
    const slackProfilePicture = "Alex.jpg";

    // Display Slack details
    document.getElementById('displayName').textContent = slackDisplayName;
    document.getElementById('email').textContent = slackEmail;
    document.getElementById('profilePicture').src = slackProfilePicture;

    // Display current time in UTC
    function updateTime() {
        const now = new Date();
        const utcString = now.toUTCString();
        document.getElementById('currentTime').textContent = utcString;
        document.getElementById('currentDay').textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}
