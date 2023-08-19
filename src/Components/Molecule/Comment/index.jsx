import moment from "moment-timezone";
import React from "react";

function Comment({ data }) {
    return (
        <div className="h-[500px] overflow-auto">
            <div className="m-2">
                <h3 className="mb-4 text-lg font-semibold text-white">Comments</h3>
                {data.map((comment) => (
                    <div className="space-y-4 bg-white rounded-lg m-2" key={comment._id}>
                        <div className="flex">
                            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                <strong>{comment.commentUsername}</strong>{" "}
                                <span className="text-xs text-gray-400">
                                    {moment(comment.commentDate).tz('UTC').format('MMMM Do YYYY, h:mm:ss A z')}
                                </span>
                                <p className="text-sm">{comment.commentContent}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;
