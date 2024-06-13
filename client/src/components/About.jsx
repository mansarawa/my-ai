import React from 'react'

function About() {
  return (
    <div className='container'>
       <h1 style={{textAlign:'center',marginTop:'2%'}}> About Our Chatbot</h1>
        <h2>Introduction</h2><p style={{marginTop:'2%'}}>Welcome to our advanced conversational AI, powered by the Gemini API. Our chatbot is designed to provide you with a seamless, interactive, and intelligent conversation experience. Whether you need assistance, information, or just a friendly chat, our chatbot is here to help.</p>
        <div>
        <section>
        <h2>Technology Stack</h2>
        <p>Our chatbot is developed using the MERN stack, which is a powerful combination of MongoDB, Express.js, React, and Node.js. Here’s a breakdown of how each component contributes to the application:</p>
        <ul>
          <li><strong>MongoDB</strong>: A NoSQL database that stores all user interactions, chat histories, and bot responses. It provides the scalability and flexibility needed for handling large volumes of data.</li>
          <li><strong>Express.js</strong>: A web application framework for Node.js that provides a robust set of features for web and mobile applications. It acts as the backend server that handles API requests and processes data.</li>
          <li><strong>React</strong>: A JavaScript library for building user interfaces. The frontend of our chatbot is developed with React, providing a dynamic and responsive user experience.</li>
          <li><strong>Node.js</strong>: A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the creation of scalable and efficient backend services.</li>
        </ul>
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li><strong>Intelligent Conversations</strong>: Our chatbot uses the Gemini API, which is known for its advanced natural language processing capabilities. This allows the bot to understand and respond to a wide range of queries with human-like accuracy.</li>
          <li><strong>User-Friendly Interface</strong>: The chatbot interface is designed with user experience in mind. It's intuitive, easy to navigate, and works seamlessly across different devices.</li>
          <li><strong>Customizable Responses</strong>: The bot's responses can be tailored based on user preferences and interaction history, providing a personalized experience.</li>
          <li><strong>Secure and Private</strong>: We take user privacy seriously. All interactions are securely stored and managed, ensuring that your data is safe.</li>
          <li><strong>Continuous Learning</strong>: The bot is continuously updated and trained with new data to improve its performance and accuracy.</li>
        </ul>
      </section>
      
      <section>
        <h2>How It Works</h2>
        <ol>
          <li><strong>User Interaction</strong>: Users interact with the chatbot through a simple and intuitive interface built with React. Users can type their questions or commands in a chatbox and receive responses in real-time.</li>
          <li><strong>Processing Requests</strong>: When a user sends a message, the request is processed by our backend server built with Express.js. The server then communicates with the Gemini API to fetch the most appropriate response.</li>
          <li><strong>Response Generation</strong>: The Gemini API processes the input, utilizes its advanced natural language processing models, and generates a response which is sent back to the user via the frontend interface.</li>
          <li><strong>Data Management</strong>: All user interactions and bot responses are stored in MongoDB. This data is used for improving the bot’s responses over time and for providing personalized user experiences.</li>
        </ol>
      </section>
        </div>
        </div>
  )
}

export default About