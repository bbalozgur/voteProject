import React, { useState, useEffect } from 'react';
import './VoteItem.scss';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const VoteItem = ({
  testId, score, title, link
}) => {
  const [scorePoint, setScorePoint] = useState();
  const [localData,setLocalData] = useState();
  const [dataIndex, setDataIndex] = useState();

  useEffect(() => {
    const data = localStorage.getItem('user');
    const localDataValue = JSON.parse(data);
    setLocalData(localDataValue);
    const dataIndexValue = localDataValue.length > 1 ? localDataValue.findIndex(x => x.userTitle === title) : 0;
    setDataIndex(dataIndexValue)

    setScorePoint(score)
  }, [score,title]);

  const onUpVote = () => {
    localData[dataIndex].points = scorePoint + 1;
    localStorage.setItem('user', JSON.stringify(localData));
    setScorePoint(scorePoint + 1);
  }
  const onDownVote = () => {
    localData[dataIndex].points = scorePoint - 1;
    localStorage.setItem('user', JSON.stringify(localData));
    setScorePoint(scorePoint - 1);
  }

  return (
    <div className="vote-item" data-testid={`vote-item-${testId}`}>
      <div className="vote-item-card">
        <div className="card-box">
          <span className="score"> {scorePoint} </span>
          <span className="text"> POINTS </span>
        </div>
        <div className="card-update">
          <div className="title">
            {title}
          </div>
          <div className="link">
            {link}
          </div>
          <div className="favourite">
            <div className="up-vote" onClick={onUpVote} > <ArrowUpOutlined />up vote</div>
            <div className="down-vote" onClick={onDownVote} ><ArrowDownOutlined /> down vote</div>
          </div>
        </div>
      </div>
    </div>
  );
};

VoteItem.defaultProps = {
  testId: 'test',
};

export default VoteItem;
 