"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentInput = ({ anime_mal_id, user_gmail, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter()

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_gmail, username, comment, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh()
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">Postingan Terkirim...</p>}
      <textarea
        value={comment}
        className="h-32 w-full p-2 text-xl"
        onChange={handleInput}
      ></textarea>
      <button
        className="w-52 py-2 px-3 bg-color-accent"
        onClick={handlePosting}
      >
        Posting Komentar
      </button>
    </div>
  );
};

export default CommentInput;
