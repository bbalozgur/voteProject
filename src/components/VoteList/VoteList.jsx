import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import { Select, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './VoteList.scss';
import VoteItem from '../VoteItem/VoteItem';

const { Option } = Select;

const VoteList = ({
  testId
}) => {
  const [voteList, setVoteList] = useState();
  const [pageSize, setPageSize] = useState();

  useEffect(() => {
   initPage(); 
  }, [])

  const handleChange = (value) => {
    initPage(value);
  }

  const initPage = (sortType = "desc", page = 1) => {
    const data = localStorage.getItem('user');
    const dataSet = JSON.parse(data);
    if (dataSet) {
        setPageSize(dataSet.length);
        const sortedData = sortType === "desc" ? dataSet.sort((a, b) => b.points - a.points) : dataSet.sort((a, b) => a.points - b.points);
        if (dataSet.length > 5) {
          setVoteList(sortedData.slice(5*(page -1), 5*page));    
        } else {
          setVoteList(sortedData);    
        }
    }
  }
  const onChange = page => {
    initPage("desc", page);
  };
  return (
    <div className="vote-list" data-testid={`vote-list-${testId}`}>
      <div className="box">
        <Link to="/AddNewVote">
          <div className="vote-box">
            <PlusOutlined />
          </div>
        </Link>
          <h1>SUBMİT A LINK</h1>
      </div>
      <div className="select-box">
        <Select defaultValue="order-by" style={{ width: 120 }} onChange={handleChange}>
          <Option value="desc">Most Voted (Z -> A)</Option>
          <Option value="asc">Less Voted (A -> Z)</Option>
        </Select>
      </div>
      {voteList?.map(item => (
        <VoteItem title={item.userTitle} link={item.userLink} score={item.points}  />
      ))}
      {voteList && <Pagination onChange={onChange} pageSize={5} total={pageSize} defaultCurrent={1}/> }
    </div>
  );
};

VoteList.defaultProps = {
  testId: 'test',
};

export default VoteList;