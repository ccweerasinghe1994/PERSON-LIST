import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  return (
    <article className = 'person'>
      <img
        src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`}
        alt="person iamge"
      />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
const PersonList = () => {
  return (
    <section className = 'person-list'>
      <Person img="34" name="jhon" job="developer" />
      <Person img="33" name="nik" job="ba">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste
          enim expedita, error eius aperiam repellat minima magni tempora amet
          laboriosam excepturi dignissimos quos provident cumque neque est totam
          vero!
        </p>
      </Person>
      <Person img="37" name="abdul" job="coder" />
    </section>
  );
};
ReactDOM.render(<PersonList />, document.getElementById("root"));
