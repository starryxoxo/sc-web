---
{"dg-publish":true,"permalink":"/misc/entry/","tags":["gardenEntry"]}
---

<style>
        :root {
            --text-normal: #fff;
            --accent: #fff;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #000;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-normal);
        }
        .password-container {
            width: clamp(320px, 90vw, 400px);
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px) saturate(120%);
            -webkit-backdrop-filter: blur(12px) saturate(120%);
            border-radius: 24px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.18), 0 1.5px 5px rgba(0,0,0,0.12);
            padding: 40px 32px;
            border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .password-title {
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            margin-bottom: 32px;
            color: var(--text-normal);
        }
        .input-group {
            margin-bottom: 24px;
        }
        .input-label {
            display: block;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 8px;
            color: var(--text-normal);
            opacity: 0.8;
        }
        .password-input {
            width: 100%;
            padding: 16px 18px;
            font-size: 1rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            color: var(--text-normal);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            outline: none;
            transition: all 0.3s ease;
        }
        .password-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
        .password-input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }
        .submit-btn {
            width: 100%;
            padding: 16px 18px;
            font-size: 1rem;
            font-weight: 600;
            background: var(--accent);
            color: #000;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }
        .submit-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(255, 255, 255, 0.3);
        }
        .submit-btn:active {
            transform: translateY(0);
        }
        .error-message {
            color: #ff3b30;
            font-size: 0.85rem;
            margin-top: 8px;
            opacity: 0;
            transform: translateY(-4px);
            transition: all 0.3s ease;
        }
        .error-message.show {
            opacity: 1;
            transform: translateY(0);
        }
        @media (max-width: 480px) {
            .password-container {
                padding: 32px 24px;
                border-radius: 20px;
            }
        }
    </style>
    
<div class="password-container">
        <h1 class="password-title">Enter Password</h1>
        
        <form id="passwordForm">
            <div class="input-group">
                <label for="password" class="input-label">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    class="password-input" 
                    placeholder="Enter password"
                    required
                >
                <div class="error-message" id="errorMessage">
                    Incorrect password. Please try again.
                </div>
            </div>
            
            <button type="submit" class="submit-btn">
                Submit
            </button>
        </form>
    </div>
    <script>
        const form = document.getElementById('passwordForm');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('errorMessage');
        const submitBtn = document.querySelector('.submit-btn');
        // 
        const correctPassword = '9268';
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const enteredPassword = passwordInput.value;
            
            if (enteredPassword === correctPassword) {
                // Success - redirect or perform action
                submitBtn.textContent = 'Success!';
                submitBtn.style.background = '#28a745';
                errorMessage.classList.remove('show');
                
                // Example: redirect after success
                setTimeout(() => {
                    window.location.href = 'https://scweb9.netlify.app/home/';
                }, 1000);
            } else {
                // Error
                errorMessage.classList.add('show');
                passwordInput.focus();
                passwordInput.select();
                
                // Shake animation
                passwordInput.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    passwordInput.style.animation = '';
                }, 500);
            }
        });
        // Clear error message when typing
        passwordInput.addEventListener('input', function() {
            errorMessage.classList.remove('show');
            submitBtn.textContent = 'Submit';
            submitBtn.style.background = 'var(--accent)';
        });
        // Add shake animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-4px); }
                75% { transform: translateX(4px); }
            }
        `;
        document.head.appendChild(style);
    </script>