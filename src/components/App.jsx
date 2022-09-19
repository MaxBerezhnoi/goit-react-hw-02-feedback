
import Counter from './Counter';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <p>Please, don't leave us without feedback.</p>
      <Counter />
    </div>
  );
};
