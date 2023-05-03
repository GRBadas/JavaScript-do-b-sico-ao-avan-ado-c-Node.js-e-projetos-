function gravar() {
  var device = navigator.mediaDevices.getUserMedia({audio: true})
  var items = [];
  device.then( stream => {
    var recorder = new MediaRecorder(stream);
    recorder.ondataavailable = e => {
      items.push(e.data)
      if(recorder.state == 'inactive') {
        var blob = new Blob(items, {type: 'audio/webm'});
        var audio = document.getElementById('audio')
        var mainaudio = document.createElement('audio')
        mainaudio.setAttribute('controls', 'controls')
        audio.appendChild(mainaudio)
        mainaudio.innerHTML = '<source src="'+URL.createObjectURL(blob)+'"type="video/webm"/>';

        // Transcrição de fala usando a API do Google
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
          var base64data = reader.result;
          var requestData = {
            "config": {
              "encoding": "LINEAR16",
              "languageCode": "pt-BR",
              "sampleRateHertz": 44100
            },
            "audio": {
              "content": base64data.split(",")[1]
            }
          };
          fetch("https://speech.googleapis.com/v1/speech:recognize?key=", {
            method: "POST",
            body: JSON.stringify(requestData)
          })

          .then(response => response.json())
          .then(data => {
            var transcript = data.results[0].alternatives[0].transcript;
            var textElement = document.getElementById('transcription');
            textElement.innerText = transcript;
          })
          .catch(error => console.error(error));
        }
      }
    }
    recorder.start()
    setTimeout(() => {
      recorder.stop()
    }, 5000)
  })
}
