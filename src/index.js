//imports
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// create react components
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Thats Great"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 9:37PM"
        comment="No Big Deal"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 2:15AM"
        comment="Go Fuck Yo Self"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>    
    </div>
  );
};

// show react component on screen

ReactDOM.render (
  <App />,
  document.querySelector('#root')
);
