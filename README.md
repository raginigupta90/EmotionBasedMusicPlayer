# Emotion-Based Music Player

This repository contains the code for an Emotion-Based Music Player web application. The application detects the user's emotion using a webcam and plays music that matches the detected emotion.

## Prerequisites

### Technical Knowledge
- Basic understanding of Python
- Familiarity with web development (HTML, CSS, JavaScript)
- Understanding of machine learning concepts

### Software Requirements
1. Python 3.x
2. Libraries: OpenCV, TensorFlow, Keras, NumPy
3. Text Editor (e.g., Visual Studio Code)
4. Web Browser

## Project Structure

- `frontEnd/`: Contains the HTML, CSS, and JavaScript files for the web interface.
- `liveEmoji/`: Contains the pre-trained model and related files.
- `Happy.npy`, `angry.npy`, `fear.npy`, `goodluck.npy`, `labels.npy`, `rock.npy`, `sad.npy`, `smile.npy`, `surprise.npy`: Numpy arrays storing training data.
- `emotion.jpg`: Sample image for emotion detection.
- `model.h5`: Pre-trained machine learning model.
- `music.py`: Script to handle emotion detection and play corresponding music.

## Setting Up the Application

1. **Clone Repository**: Clone this repository to your local machine.
    ```bash
    git clone https://github.com/raginigupta90/EmotionBasedMusicPlayer.git
    cd EmotionBasedMusicPlayer
    ```
2. **Install Dependencies**: Install the required Python libraries.
    ```bash
    pip install opencv-python tensorflow keras numpy
    ```
3. **Run the Application**: Execute the `music.py` script.
    ```bash
    python music.py
    ```

## Usage

1. Open a web browser and navigate to the `frontEnd/index.html` file.
2. Allow access to the webcam.
3. The application will detect your emotion and play music that matches the detected emotion.

## About

This project uses a pre-trained machine learning model to detect emotions from the user's facial expressions using a webcam. Based on the detected emotion, the application plays music that suits the emotion. This can be useful for enhancing user experience by providing mood-based music recommendations.

For more details, visit the repository [here](https://github.com/raginigupta90/EmotionBasedMusicPlayer).

##Thanks !! 
