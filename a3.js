document.addEventListener("DOMContentLoaded", function() {
    // Arrays containing data for each section
    const users = [
        { name: 'Ande Devi Prasad', username: 'devi_05', email: 'dande@gitam.in', status: 'Active', image: 'https://via.placeholder.com/150' },
        { name: 'John Doe', username: 'john_d', email: 'john@gmail.com', status: 'Inactive', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', username: 'jane_s', email: 'jane@yahoo.com', status: 'Active', image: 'https://via.placeholder.com/150' },
        { name: 'Richard Roe', username: 'richard_r', email: 'richard@hotmail.com', status: 'Active', image: 'https://via.placeholder.com/150' },
        { name: 'Michael Brown', username: 'michael_b', email: 'michael@outlook.com', status: 'Inactive', image: 'https://via.placeholder.com/150' },
        // Add more users here
    ];

    const loans = [
        { loanType: 'Personal Loan', bank: 'Bank of America' },
        { loanType: 'Home Loan', bank: 'Chase Bank' },
        { loanType: 'Car Loan', bank: 'Wells Fargo' },
        { loanType: 'Education Loan', bank: 'Citibank' },
        { loanType: 'Business Loan', bank: 'PNC Bank' },
        // Add more loans here
    ];

    const cibilScores = [
        { creditHistory: 'Good', paymentPatterns: 'Regular', publicRecords: 'Clean' },
        { creditHistory: 'Fair', paymentPatterns: 'Irregular', publicRecords: 'One default' },
        { creditHistory: 'Good', paymentPatterns: 'Regular', publicRecords: 'No issues' },
        { creditHistory: 'Poor', paymentPatterns: 'Missed payments', publicRecords: 'Two defaults' },
        { creditHistory: 'Excellent', paymentPatterns: 'Perfect', publicRecords: 'Clean' },
        // Add more CIBIL scores here
    ];

    const banks = [
        { name: 'Bank of America', location: 'New York' },
        { name: 'Chase Bank', location: 'Los Angeles' },
        { name: 'Wells Fargo', location: 'San Francisco' },
        { name: 'Citibank', location: 'Miami' },
        { name: 'PNC Bank', location: 'Philadelphia' },
        // Add more banks here
    ];

    const financialPlans = [
        { ageGroup: '18-25', description: 'Starter plan for young adults' },
        { ageGroup: '26-35', description: 'Mid-career savings plan' },
        { ageGroup: '36-45', description: 'Family support plan' },
        { ageGroup: '46-55', description: 'Pre-retirement financial plan' },
        { ageGroup: '56-65', description: 'Retirement investment plan' },
        // Add more financial plans here
    ];

    const notifications = [
        { type: 'Email', content: 'Your loan application is approved.' },
        { type: 'SMS', content: 'Your payment is due.' },
        { type: 'App', content: 'New financial plan available.' },
        { type: 'Email', content: 'Update your account details.' },
        { type: 'App', content: 'Loan repayment is due soon.' },
        // Add more notifications here
    ];

    const needs = [
        { needType: 'Personal Loan', description: 'Loan for personal expenses' },
        { needType: 'Home Loan', description: 'Loan for purchasing a house' },
        { needType: 'Car Loan', description: 'Loan for buying a car' },
        { needType: 'Education Loan', description: 'Loan for higher education' },
        { needType: 'Business Loan', description: 'Loan for business setup' },
        // Add more needs here
    ];

    // Render functions for each section
    const renderUsers = () => {
        const userContainer = document.getElementById("user-container");
        userContainer.innerHTML = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <img src="image.png" alt="${user.name}" class="user-image" />
                <h3>${user.name}</h3>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Status:</strong> ${user.status}</p>
            `;
            userContainer.appendChild(userCard);
        });
    };

    const renderLoans = () => {
        const loanContainer = document.getElementById("loan-container");
        loanContainer.innerHTML = '';

        loans.forEach(loan => {
            const loanCard = document.createElement('div');
            loanCard.classList.add('loan-card');
            loanCard.innerHTML = `
                <p><strong>Loan Type:</strong> ${loan.loanType}</p>
                <p><strong>Bank:</strong> ${loan.bank}</p>
            `;
            loanContainer.appendChild(loanCard);
        });
    };

    const renderCIBILScores = () => {
        const cibilScoreContainer = document.getElementById("cibil-score-container");
        cibilScoreContainer.innerHTML = '';

        cibilScores.forEach(cibilScore => {
            const cibilScoreCard = document.createElement('div');
            cibilScoreCard.classList.add('cibil-score-card');
            cibilScoreCard.innerHTML = `
                <p><strong>Credit History:</strong> ${cibilScore.creditHistory}</p>
                <p><strong>Payment Patterns:</strong> ${cibilScore.paymentPatterns}</p>
                <p><strong>Public Records:</strong> ${cibilScore.publicRecords}</p>
            `;
            cibilScoreContainer.appendChild(cibilScoreCard);
        });
    };

    const renderBanks = () => {
        const bankContainer = document.getElementById("bank-container");
        bankContainer.innerHTML = '';

        banks.forEach(bank => {
            const bankCard = document.createElement('div');
            bankCard.classList.add('bank-card');
            bankCard.innerHTML = `
                <p><strong>Bank Name:</strong> ${bank.name}</p>
                <p><strong>Location:</strong> ${bank.location}</p>
            `;
            bankContainer.appendChild(bankCard);
        });
    };

    const renderFinancialPlans = () => {
        const financialPlanContainer = document.getElementById("financial-plan-container");
        financialPlanContainer.innerHTML = '';

        financialPlans.forEach(plan => {
            const planCard = document.createElement('div');
            planCard.classList.add('financial-plan-card');
            planCard.innerHTML = `
                <p><strong>Age Group:</strong> ${plan.ageGroup}</p>
                <p><strong>Description:</strong> ${plan.description}</p>
            `;
            financialPlanContainer.appendChild(planCard);
        });
    };

    const renderNotifications = () => {
        const notificationContainer = document.getElementById("notification-container");
        notificationContainer.innerHTML = '';

        notifications.forEach(notification => {
            const notificationCard = document.createElement('div');
            notificationCard.classList.add('notification-card');
            notificationCard.innerHTML = `
                <p><strong>Type:</strong> ${notification.type}</p>
                <p><strong>Content:</strong> ${notification.content}</p>
            `;
            notificationContainer.appendChild(notificationCard);
        });
    };

    const renderNeeds = () => {
        const needContainer = document.getElementById("need-container");
        needContainer.innerHTML = '';

        needs.forEach(need => {
            const needCard = document.createElement('div');
            needCard.classList.add('need-card');
            needCard.innerHTML = `
                <p><strong>Need Type:</strong> ${need.needType}</p>
                <p><strong>Description:</strong> ${need.description}</p>
            `;
            needContainer.appendChild(needCard);
        });
    };

    // Navigation logic
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = this.getAttribute("data-section");

            // Hide all sections
            document.querySelectorAll(".content-section").forEach(section => {
                section.classList.remove("active");
            });

            // Show the target section
            const targetElement = document.getElementById(targetSection);
            targetElement.classList.add("active");

            // Render the corresponding data
            if (targetSection === 'user') renderUsers();
            if (targetSection === 'loan') renderLoans();
            if (targetSection === 'cibil-score') renderCIBILScores();
            if (targetSection === 'bank') renderBanks();
            if (targetSection === 'financial-plan') renderFinancialPlans();
            if (targetSection === 'notification') renderNotifications();
            if (targetSection === 'need') renderNeeds();
        });
    });

    // Initially render the first section (User)
    renderUsers();
});
