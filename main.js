
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);
     
    var Content =  event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
    if(Content =="Toma mi selfie")
    {
        console.log("tomando selfie --- ");
        speak();
    }

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
       speak();
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Tomando selfie en 5 segundos";

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);

}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save()
{
    link = document.getElementById("link");
    Image = document.getElementById("selfie_image").scr ;
    link.href = image;
    link.click();
}

