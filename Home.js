//Hard coded medications
let items = ['Lipitor', 'paracetamol', 'Ortho Evra', 'Crestor', 'FiberCon', 'Azithromycin', 'Folic Acid',
            'Cipro','Flomax','Actos', 'Fosamax'];

        // Display all items initially
        const itemList = document.getElementById('itemList');
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            itemList.appendChild(listItem);
        });

        function startSpeechRecognition() {
            const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

            recognition.onresult = function(event) {
                const speechResult = event.results[0][0].transcript.toLowerCase();
                searchItems(speechResult);
            };

            recognition.start();
        }

        function searchItems(speechResult) {
            const resultList = document.getElementById('searchResult');
            resultList.innerHTML = '';

            items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                // Highlight the matching item
                if (item.toLowerCase().includes(speechResult)) {
                    listItem.classList.add('highlight');
                }
                resultList.appendChild(listItem);
            });

            const itemList = document.getElementById('itemList');
            itemList.innerHTML = '';
        }