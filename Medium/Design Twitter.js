/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.date = 0;
  this.users = {};
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (this.users[userId]) this.users[userId].tweets.push([this.date, tweetId]);
  else
    this.users[userId] = {
      tweets: [[this.date, tweetId]],
      subscriptions: [],
    };
  this.date++;
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const allTweets = [];
  if (this.users[userId] && this.users[userId].subscriptions.length) {
    this.users[userId].subscriptions.forEach((subId) => {
      if (this.users[subId]) allTweets.push(...this.users[subId].tweets);
    });
  }
  if (this.users[userId])
    return [...allTweets, ...this.users[userId].tweets]
      .sort((a, b) => b[0] - a[0])
      .map((e) => e[1])
      .slice(0, 10);
  return [];
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (followerId !== followeeId) {
    if (this.users[followerId]) {
      if (!this.users[followerId].subscriptions.includes(followeeId)) {
        this.users[followerId].subscriptions.push(followeeId);
      }
    } else {
      this.users[followerId] = {
        tweets: [],
        subscriptions: [followeeId],
      };
    }
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (followerId !== followeeId && this.users[followerId]) {
    this.users[followerId].subscriptions = this.users[
      followerId
    ].subscriptions.filter((id) => id !== followeeId);
  }
};
