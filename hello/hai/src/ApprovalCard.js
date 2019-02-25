import React from 'react';

const ApprovalCard = prop =>
{
    return(
        <div className="ui card">
            <div className="content">
                {prop.children}
            </div>
            <div className="extra content">
                <div className="ui two cards">
                    <div className="ui card green button">Approve</div>
                    <div className="ui card red button">Reject</div>
                </div>
            </div>
        </div>
    );
};
export default ApprovalCard;