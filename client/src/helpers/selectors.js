// TODO: getUsersForRoom needs to be implemented

const getChannelsForRoom = (room, state) => {
  return state.channels.filter((channel) => channel.room_id === room.id);
};

const getMessagesForChannel = (channel, state) => {
  return state.messages.filter((message) => message.channel_id === channel.id);
};

const attachUsersToMessages = (messages, state) => {
  return messages.map((msg) => {
    return {
      ...msg,
      user: state.users.find((user) => user.id === msg.user_id),
    };
  });
};

export { getChannelsForRoom, getMessagesForChannel, attachUsersToMessages };
