import React, { useState } from 'react';
import { Input, Button, Modal } from 'antd';
import { useHistory } from "react-router-dom";
import './AddNewVote.scss';

const AddNewVote = ({
  testId
}) => {
  const [valueInput, setvalueInput] = useState({
    userTitle: '',
    userLink: '',
    points: 0,
    createDate: new Date(),
  });

  const history = useHistory();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setvalueInput({
      ...valueInput,
      [evt.target.name]: value
    });
  };

  const setStorage = () => {
    setTimeout(() => {
    if(valueInput.userTitle && valueInput.userLink) {
      let data = localStorage.getItem('user');
      if(data) {
        const dataSet = JSON.parse(data);
        dataSet.push(valueInput);
        localStorage.setItem('user', JSON.stringify(dataSet));
      } else {
        localStorage.setItem('user', JSON.stringify([valueInput]));
      }
      Modal.success({
        okButtonProps:'false',
        content: `${valueInput.userTitle} added.`,
        onOk() {
          history.push("/");
        },
      });
    }
    }, 500);
  };

  return (
    <div className="add-new-vote" data-testid={`add-new-vote-${testId}`}>
      <h1>Add New Link</h1>
      <div className="input-form">
        <span>Link Name:</span>
        <Input name="userTitle" data-testid="userTitle"  onChange={handleChange} placeholder="e.g. Alphabet" />
      </div>
      <div className="input-form">
        <span>Link Url:</span>
        <Input name="userLink" data-testid="userLink" onChange={handleChange} placeholder="e.g. http://abc.xyz" />
      </div>
       <Button onClick={setStorage} className="btn" type="primary">Add</Button>
    </div>
  );
};

AddNewVote.defaultProps = {
  testId: 'test',
};

export default AddNewVote;
