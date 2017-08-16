- Tradeoffs
Keep Shallow
Repeat Data is OK

// Home
//     All ducks
//
// Profile
//     User info
//     User ducks
//
// Replies
//     Specific ducks
//     Ducks Replies


/users
    uid
        name
        uid
        avatar

/ducks
    duckId
        avatar
        duckId
        name
        text
        timestamp
        uid (of duck author)

/likeCount
    duckId
        0

/usersDucks
    uid
        duckId
            avatar
            duckId
            name
            text
            timestamp
            uid (of duck author)

/replies
    duckId
        replyId
            name
            comment
            uid
            timestamp
            avatar

/usersLikes
    uid
        duckId: true
