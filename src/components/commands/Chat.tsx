import React, { useState } from "react";
import Modal from "./Modal";
import OpenAI from "openai";

interface ChatProps {
  onChatEnd: () => void;
}

const Chat: React.FC<ChatProps> = ({ onChatEnd }) => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const apiKeyTemp = process.env.OPEN_API_KEY;

  const myOpenAi = new OpenAI({
    apiKey: apiKeyTemp,
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userMessage = input;
    setInput("");
    setMessages([...messages, { user: userMessage, bot: "" }]);

    try {
      const completion = await myOpenAi.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a personal assistant meant to advertise Cole Dermott. An Incredible Software Engineer. I am going to now provide you on background information about Cole (written by Cole!): " +
              "I am passionate about writing code and developing web applications to solve real-life challenges. I also enjoy working with others and meeting new people! I am good at collaborating, but also love self-learning! I am very adaptable and pick up on things quickly! " +
              "I also love to exercise, ski, read, hike, and more! My experience includes: " +
              "Software Engineer | Roadaroo | Feb 2023 - Present | Junior developer on a team of 2. Startup in the process of launching. Exposure and work in many functions including finance and accounting as well as dev work. Aided in full-stack development and architecture design. Analyzed large scales of data to search for trends and target specific sectors. Helped in creating UI design to maximize user experience and minimize user clicks. Helped in creating app to function on both IOS and Android. " +
              "Organized and participated in weekly progress calls to communicate to higher ups regarding app progress | Application Programming Interfaces (API) · Java · Dart · Testing · Communication · Analytical Skills · Microsoft Azure · Cascading Style Sheets (CSS) · JSON · C# · Teamwork · JavaScript · Python (Programming Language) · Program Development · Flutter · SQL · Mobile Applications · Web Development · C++ · HTML · Team Leadership · Data Analysis · Web Applications · Azure SQL · MongoDB ||||| " +
              "Software Engineer | PointClickCare | Sep 2023 - Dec 2023 | Member of MDS Team who built assessments according to government rules and regulations to assess patients. Worked with software engineering and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance. Designed Machine Learning algorithm to analyze patient trends within hackathon. Integrated third-party tools and components into applications. Tested methodology " +
              "with writing and execution of test plans, debugging and testing scripts and tools including unit tests and manual testing. Core Java · Pandas (Software) · SQL · Scikit-Learn · XGBoost · TensorFlow · PyTorch · Python · Jira · BitBucket ||||| " +
              "Software Developer | Directworx | Jan 2023 - Jun 2023 | Worked in dynamic 365 and azure architecture to build solutions from base level to finished product. Designed automation flows for internal and external processes in various programs (Power Automate and Planet Press) that improved efficiency. Onboarded new clients onto directworx platform from setup to launch. Wrote code for applications in a variety of languages (C#, Python, Java, VBA, XML, SQL). Developed research and helped solve issues " +
              "much more swiftly when they arise. Developed financial reporting and tracking software to reconcile account balances. Designed UIs to simplify and enhance user experience. Modulated code and documented according to Google Styling Standards. Created validations to ensure programs functioned as intended. Continued part-time following my co-op due to the aide I provided to the business | Microsoft SQL Server · Planet Press · Automation · C# · Microsoft Power Automate · VBA · Bash · Trello · GitKraken · .NET" +
              "Software Engineer | Brock Solutions | May 2022 - Sep 2022 | Member of shift bidding team which engineered a multi-platform application using C# and .NET Framework that improved operational efficiency by 30%, being adopted by over 500 Air Canada employees within the first six months post-launch. Refactored and modularized legacy codebases, elevating functionality and slashing redundant code by 12%. Utilized SQL queries and Java-based database techniques, leading to a 30% improvement in data retrieval times. |" +
              "Self Learning · Computer Science · Logical thinking and analysis · Microsoft SQL Server · Software Development · Cascading Style Sheets (CSS) · C# · Teamwork · Microsoft Office · JavaScript · Functional Specifications · Time Management · Leadership · C++ · HTML. ||||| " +
              "Co-Founder | StartUp Engine | Jan 2022 - Present | Marketed product to incubators across North America obtaining many key partnerships. Developped business plan and documentation. Aided in programming app infrastructure. | Marketing · Cascading Style Sheets (CSS) · Python (Programming Language) · Flask · Administration ||||| Cole speaks English but also French to a workable degree. Cole has worked on diverse projects in fields like " +
              "Machine Learning and Artificial Intelligence, Web Design, Mobile Development, and Backend Solutions. " +
              userMessage,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const response = completion.choices[0].message.content;
      const botMessage = response;
      setMessages(prevMessages => [
        ...prevMessages,
        { user: userMessage, bot: botMessage },
      ]);
    } catch (error) {
      console.error("Error communicating with ChatGPT:", error);
      setMessages(prevMessages => [
        ...prevMessages,
        { user: userMessage, bot: "Error communicating with ChatGPT" },
      ]);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    onChatEnd();
  };

  return (
    <Modal show={showModal} onClose={handleClose}>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <div>
              <strong>User:</strong> {msg.user}
            </div>
            <div>
              <strong>Bot:</strong> {msg.bot}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </Modal>
  );
};

export default Chat;
