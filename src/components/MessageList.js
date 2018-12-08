import React, { Component } from "react";
import ReactDOM from "react-dom";

const googleApiKey = "AIzaSyBqxoLKtpqHsvMm9aNpa6NWJ42t2OYnN9A";
const googleTranslate = require("google-translate")(googleApiKey);

class MessagesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //   message: "",
    //   messageSent: false,
      translated: false,
      translatedText: "",
      chosenLang: "en"
    };
  }

  langList = [
      
    { name: "Afrikaans", value: "af" },
    { name: "Albanian", value: "sq" },
    { name: "Arabic", value: "ar" },
    { name: "Azerbaijani", value: "az" },
    { name: "Basque", value: "eu" },
    { name: "Bengali", value: "bn" },
    { name: "Belarusian", value: "be" },
    { name: "Bulgarian", value: "bg" },
    { name: "Catalan", value: "ca" },
    { name: "Chinese Simplified", value: "zh-CN" },
    { name: "Chinese Traditional", value: "zh-TW" },
    { name: "Croatian", value: "hr" },
    { name: "Czech", value: "cs" },
    { name: "Danish", value: "da" },
    { name: "Dutch", value: "nl" },
    { name: "English", value: "en" },
    { name: "Esperanto", value: "eo" },
    { name: "Estonian", value: "et" },
    { name: "Filipino", value: "tl" },
    { name: "Finnish", value: "fi" },
    { name: "French", value: "fr" },
    { name: "Galician", value: "gl" },
    { name: "Gerogian", value: "ka" },
    { name: "German", value: "de" },
    { name: "Greek", value: "el" },
    { name: "Gujarati", value: "gu" },
    { name: "Haitian Creole", value: "ht" },
    { name: "Hebrew", value: "iw" },
    { name: "Hindi", value: "hi" },
    { name: "Hungarian", value: "hu" },
    { name: "Icelandic", value: "is" },
    { name: "Indonesian", value: "id" },
    { name: "Irish", value: "ga" },
    { name: "Italian", value: "it" },
    { name: "Japanese", value: "ja" },
    { name: "Kannada", value: "kn" },
    { name: "Korean", value: "ko" },
    { name: "latin", value: "la" },
    { name: "Latvian", value: "lv" },
    { name: "Lithuanian", value: "lt" },
    { name: "Macedonian", value: "mk" },
    { name: "Malay", value: "ms" },
    { name: "Maltese", value: "mt" },
    { name: "Norwegian", value: "no" },
    { name: "Persian", value: "fa" },
    { name: "Polish", value: "pl" },
    { name: "Portuguese", value: "pt" },
    { name: "Romanian", value: "ro" },
    { name: "Russian", value: "ru" },
    { name: "Serbian", value: "sr" },
    { name: "Slovak", value: "sk" },
    { name: "Slovenian", value: "sl" },
    { name: "Spanish", value: "es" },
    { name: "Swahili", value: "sw" },
    { name: "Swedish", value: "sv" },
    { name: "Tamil", value: "ta" },
    { name: "Telugu", value: "te" },
    { name: "Thai", value: "th" },
    { name: "Turkish", value: "tr" },
    { name: "Ukrainian", value: "uk" },
    { name: "Urdu", value: "ur" },
    { name: "Vietnamese", value: "vi" },
    { name: "Welsh", value: "cy" },
    { name: "Yiddish", value: "yi" }
  ];
  
  languageSelect = event => {
    this.setState({ chosenLang: event.target.value });
    console.log(this.state.chosenLang)
  };



  translate = (message, language) => {
    let that = this;
   
      googleTranslate.translate(
        ("hello why wont you work?"),
        this.state.chosenLang,
        function(err, translation) {
          console.log(translation.translatedText);
          console.log( message.text);
          that.setState({
            translatedText: translation.translatedText,
            translated: true
          });

        }
      );
    
  };
  
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    const styles = {
      container: {
        overflowY: "scroll",
        flex: 1
      },
      ul: {
        listStyle: "none"
      },
      li: {
        marginTop: 13,
        marginBottom: 13
      },
      senderUsername: {
        fontWeight: "bold"
      },
      message: {
        fontSize: 15,
        backgroundColor: "#353940",
        // border: "2px solid rgb(118, 228, 236",
        color: "white",
        padding: "4px 8px",
        borderRadius: "8px",
        display: "inline"
      }
    };

    return (
      <div
        style={{
          ...this.props.style,
          ...styles.container
        }}
      >
        <ul style={styles.ul}>
          {this.props.messages.map((message, index) => (
            <li key={index} style={styles.li}>
              <div>
                <span style={styles.senderUsername}>{message.senderId}</span>{" "}
              </div>
              {!this.state.translated ? (
                <p style={styles.message}>{message.text}</p>
              ) : (
                <p style={styles.message}>{this.state.translatedText}</p>
              )}


        

              <br />
              <select
                name="chosenLang"
                s={12}
                type="select"
                onChange={this.languageSelect}
                className="langDrop"
              >
                {this.langList.length
                  ? this.langList.map((languageObj, index) => (
                      <option
                        name={languageObj.name}
                        value={languageObj.value}
                        key={index}
                      >
                        {languageObj.name}
                      </option>
                    ))
                  : "Nope"}
              </select>
              <button
                onClick={this.translate}
                // onClick={console.log(this.props.messages[0].text)}
                className="btn btn-outline-secondary translateBtn"
              >
                Translate Text
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessagesList;
