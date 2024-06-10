function skillsMembers() {
  return {
    name: 'skillsMembers',
    type: 'members',
    path: 'skills',
    method: 'GET',
    params: {
      skill: 'string',
    },
  };
}