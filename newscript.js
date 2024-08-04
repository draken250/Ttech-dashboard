{/* <script> */}
  document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next');
    const prevButtons = document.querySelectorAll('.prev');
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep = Math.min(currentStep + 1, steps.length - 1);
            showStep(currentStep);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep = Math.max(currentStep - 1, 0);
            showStep(currentStep);
        });
    });

    showStep(currentStep);

    // Initialize Select2
    $('#coreValuesSelect').select2({
        placeholder: "Select your core values",
        allowClear: true
    });

    // Form submission
    document.getElementById('multiStepForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedValues = $('#coreValuesSelect').val();
        if (selectedValues.length < 5) {
            alert('Please select at least 5 core values.');
        } else {
            alert('Form submitted successfully!');
        }
    });
});

// </script>
//   <script>
  document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next');
    const prevButtons = document.querySelectorAll('.prev');
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep = Math.min(currentStep + 1, steps.length - 1);
            showStep(currentStep);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep = Math.max(currentStep - 1, 0);
            showStep(currentStep);
        });
    });

    showStep(currentStep);

    // Initialize Select2
    $('#coreValuesSelect').select2({
        placeholder: "Select your core values",
        allowClear: true
    });

    // Form submission
    document.getElementById('multiStepForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedValues = $('#coreValuesSelect').val();
        if (selectedValues.length < 5) {
            alert('Please select at least 5 core values.');
        } else {
            alert('Form submitted successfully!');
        }
    });
});

// </script>