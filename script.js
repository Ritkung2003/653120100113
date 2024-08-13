let isThai = true;
        
        function toggleLanguage() {
            const nameElement = document.getElementById('student-name');
            if (isThai) {
                nameElement.innerHTML = 'Warit Hongsrimueang';
                isThai = false;
            } else {
                nameElement.innerHTML = 'วริศ หงษ์ศรีเมือง';
                isThai = true;
            }
        }