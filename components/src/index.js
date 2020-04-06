import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="djakdde"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Stan" 
                timeAgo="Yesturday at 4:45PM" 
                content="12312ewd"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 3:12PM" 
                content="嘿嘿"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));