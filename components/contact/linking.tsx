import React from "react";
import {Linking} from "react-native";

export default function LinkingFunction(action: string){
    if (action === 'instagram'){
        Linking.openURL('https://www.instagram.com/vikkstagram/');
    }
    else if (action === 'twitter'){
        Linking.openURL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM9baUWhQUzknaGXE1JpNa3qCLaEkDeSvjw&s');
    }
    else if (action === "whatsapp"){
        Linking.openURL('https://wa.me/5532998340667');
    }
    else if (action === 'gmail'){
        Linking.openURL('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhpkMVnmMfQCkbJKMrKHXTQdTKkvlPnzhKpzxRsWlBDtcSlVFMZHnRLGnmXtVTSqKsPsnL');
    }
    else if (action === 'num1'){
        Linking.openURL('tel:5532998340667');
    }
    else if (action === 'num2'){
        Linking.openURL('tel:5532991519313');
    }
    else{
        return null;
    }
    }
