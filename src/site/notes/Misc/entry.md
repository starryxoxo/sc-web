---
{"dg-publish":true,"permalink":"/misc/entry/","tags":["gardenEntry"]}
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SC Web</title>
    <style>
        :root {
            --text-normal: #e4e4e7;
            --accent: #007aff;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter Variable', sans-serif;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
        }
        /* Starry background animation */
        .stars {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 1;
        }
        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 2s infinite ease-in-out alternate;
        }
        @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
        }
        .shooting-star {
            position: absolute;
            height: 2px;
            background: linear-gradient(90deg, #fff, transparent);
            border-radius: 999px;
            animation: shoot 3s ease-out infinite;
        }
        @keyframes shoot {
            0% {
                transform: translateX(-100px) translateY(-100px);
                opacity: 1;
            }
            70% {
                opacity: 1;
            }
            100% {
                transform: translateX(200px) translateY(200px);
                opacity: 0;
            }
        }
        /* Main container - matching your glassy style */
        .container {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px) saturate(120%);
            -webkit-backdrop-filter: blur(12px) saturate(120%);
            border-radius: 24px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.18), 0 1.5px 5px rgba(0,0,0,0.12);
            padding: 32px 28px;
            text-align: center;
            z-index: 10;
            width: clamp(320px, 60vw, 400px);
            animation: floatup 1s cubic-bezier(.4,2,.6,1) 1;
            position: relative;
            overflow: hidden;
            color: var(--text-normal);
        }
        @keyframes floatup {
            from { transform: translateY(60px); opacity: 0; }
            to   { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 350px) {
            .container {
                width: 98vw;
                margin: 0 1vw;
                padding: 24px 4vw;
                border-radius: 16px;
            }
        }
        .logo {
            font-size: clamp(1.5rem, 3vw, 1.75rem);
            font-weight: 500;
            color: var(--text-normal);
            margin-bottom: 6px;
            opacity: 0.9;
        }
        .subtitle {
            color: rgba(228, 228, 231, 0.6);
            margin-bottom: 28px;
            font-size: 0.95rem;
            font-weight: 400;
        }
        .password-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .input-group {
            position: relative;
        }
        .password-input {
            width: 100%;
            padding: 16px 20px;
            font-size: 0.95rem;
            font-family: 'Inter Variable', sans-serif;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(0.625rem);
            -webkit-backdrop-filter: blur(0.625rem);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.4);
            border-radius: 0.75rem;
            color: var(--text-normal);
            outline: none;
            transition: all 0.3s ease;
            text-align: center;
            font-weight: 400;
        }
        .password-input::placeholder {
            color: rgba(228, 228, 231, 0.5);
        }
        .password-input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2), 0 0.25rem 0.625rem rgba(0, 0, 0, 0.4);
            transform: scale(1.01);
        }
        .submit-btn {
            appearance: none;
            -webkit-appearance: none;
            background: rgba(255, 255, 255, 0.03);
            color: var(--text-normal);
            font-weight: 500;
            font-size: 0.95rem;
            backdrop-filter: blur(0.625rem);
            -webkit-backdrop-filter: blur(0.625rem);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.4);
            user-select: none;
            transition: all 0.3s ease;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            cursor: pointer;
            font-family: 'Inter Variable', sans-serif;
            letter-spacing: 0.25px;
            position: relative;
            overflow: hidden;
        }
        .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }
        .submit-btn:hover::before {
            left: 100%;
        }
        .submit-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
            background: rgba(255, 255, 255, 0.06);
            border-color: rgba(255, 255, 255, 0.25);
        }
        .submit-btn:active {
            transform: translateY(0);
        }
        .error-message {
            color: #ff6b6b;
            font-size: 0.9rem;
            font-family: 'Inter Variable', sans-serif;
            margin-top: 8px;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-weight: 500;
        }
        .error-message.show {
            opacity: 1;
        }
        .success-message {
            color: #4ecdc4;
            font-size: 1rem;
            font-family: 'Inter Variable', sans-serif;
            margin-top: 16px;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-weight: 500;
        }
        .success-message.show {
            opacity: 1;
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        /* Loading state */
        .submit-btn.loading {
            pointer-events: none;
            opacity: 0.7;
        }
        .submit-btn.loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 18px;
            height: 18px;
            margin: -9px 0 0 -9px;
            border: 2px solid transparent;
            border-top: 2px solid currentColor;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .submit-btn.loading span {
            opacity: 0;
        }
        /* Enhance mobile experience */
        @media (max-width: 768px) {
            .container {
                margin: 20px;
            }
            
            .password-input {
                font-size: 16px; /* Prevents zoom on iOS */
            }
        }
        /* Focus states for accessibility */
        .password-input:focus,
        .submit-btn:focus {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
        }
    </style>
</head>
<body>
    <div class="stars" id="stars"></div>
    
    <div class="container">
        <div class="logo">SC Web</div>
        <div class="subtitle">Enter password to continue</div>
        
        <form class="password-form" id="passwordForm">
            <div class="input-group">
                <input 
                    type="password" 
                    class="password-input" 
                    id="passwordInput"
                    placeholder="Password"
                    required
                    autocomplete="current-password"
                >
            </div>
            
            <button type="submit" class="submit-btn" id="submitBtn">
                <span>Continue</span>
            </button>
            
            <div class="error-message" id="errorMessage">
                Incorrect password
            </div>
            
            <div class="success-message" id="successMessage">
                Welcome!
            </div>
        </form>
    </div>
    <script>
        // Create animated stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starCount = 100;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = (Math.random() * 3 + 1) + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 2 + 's';
                starsContainer.appendChild(star);
            }
            
            // Create shooting stars
            setInterval(() => {
                if (Math.random() < 0.3) { // 30% chance each interval
                    const shootingStar = document.createElement('div');
                    shootingStar.className = 'shooting-star';
                    shootingStar.style.top = Math.random() * 50 + '%';
                    shootingStar.style.left = '0%';
                    shootingStar.style.width = (Math.random() * 100 + 50) + 'px';
                    starsContainer.appendChild(shootingStar);
                    
                    setTimeout(() => {
                        if (shootingStar.parentNode) {
                            shootingStar.parentNode.removeChild(shootingStar);
                        }
                    }, 3000);
                }
            }, Math.random() * 4000 + 3000);
        }
        // Password validation
        const correctPassword = '9268'; // Change this to your desired password
        const form = document.getElementById('passwordForm');
        const passwordInput = document.getElementById('passwordInput');
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        const submitBtn = document.getElementById('submitBtn');
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const enteredPassword = passwordInput.value.trim();
            
            // Add loading state
            submitBtn.classList.add('loading');
            
            // Hide previous messages
            errorMessage.classList.remove('show');
            successMessage.classList.remove('show');
            
            // Simulate async validation (you can replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 800));
            
            submitBtn.classList.remove('loading');
            
            if (enteredPassword === correctPassword) {
                successMessage.classList.add('show');
                passwordInput.style.borderColor = '#4ecdc4';
                passwordInput.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.2), 0 0.25rem 0.625rem rgba(0, 0, 0, 0.4)';
                
                // Simulate redirect after 1.5 seconds
                setTimeout(() => {
                    window.location.href = 'https://scweb9.netlify.app/home/';
                }, 1500);
                
            } else {
                errorMessage.classList.add('show');
                passwordInput.style.borderColor = '#ff6b6b';
                passwordInput.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.2), 0 0.25rem 0.625rem rgba(0, 0, 0, 0.4)';
                
                // Shake animation
                passwordInput.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    passwordInput.style.animation = '';
                    passwordInput.value = '';
                    passwordInput.focus();
                }, 500);
            }
        });
        // Reset input styling on focus
        passwordInput.addEventListener('focus', function() {
            passwordInput.style.borderColor = '';
            passwordInput.style.boxShadow = '';
        });
        // Initialize stars when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            passwordInput.focus();
        });
        // Keyboard navigation
        passwordInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                form.dispatchEvent(new Event('submit'));
            }
        });
        // Prevent form submission while loading
        form.addEventListener('submit', function(e) {
            if (submitBtn.classList.contains('loading')) {
                e.preventDefault();
                return false;
            }
        });
    </script>
</body>
</html>