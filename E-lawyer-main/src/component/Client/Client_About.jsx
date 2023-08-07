import React from "react";
import ClientHeader from "./ClientHeader";
import './ClientAbout.css'
const Client_About = () => {
  return (
    <>
      <ClientHeader />
      <div className="about">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          finibus euismod nunc, vel feugiat ex faucibus vel. Vestibulum id
          tellus tellus. Phasellus nec justo metus. Sed in fringilla lorem, ac
          bibendum enim. Sed congue, metus sit amet finibus congue, tellus nunc
          consectetur elit, id dignissim erat quam sed mauris.
        </p>
        <p>
          Vestibulum consequat nunc risus, eget vulputate lectus varius eu.
          Integer varius dignissim est, ac vestibulum erat tempor sit amet.
          Fusce scelerisque lectus et ipsum pulvinar ultricies. Mauris elementum
          pharetra metus, ut dapibus nunc blandit eu. Aliquam vel pulvinar sem,
          a auctor libero.
        </p>
        <p>
          Nunc et velit consectetur, venenatis justo sed, tempor est. Aenean
          dapibus magna eget lacus pharetra, id dignissim felis eleifend. Donec
          ac ligula eu ex sagittis dapibus. Curabitur sodales nisi vel turpis
          iaculis convallis. Vivamus fermentum magna quis metus dapibus, sit
          amet commodo justo venenatis. Quisque vitae nisl vitae nisi ultrices
          vestibulum a eget est.
        </p>
      </div>
    </>
  );
};

export default Client_About;
