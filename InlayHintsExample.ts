type User = {
  id: number;
  name: string;
};

function greet(user: User, excited: boolean) {
  const message = `Hello, ${user.name}`;
  return excited ? `${message}!!!` : message;
}

const user = { id: 1, name: 'Nikhil' };
const result = greet(user, true);

const scores = [1, 2, 3].map((n) => n * 2);

enum Status {
  Draft,
  Published,
}

const currentStatus = Status.Published;

export { greet, result, scores, currentStatus };
