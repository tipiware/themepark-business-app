export default function InputField({ setup, state }) {
  const { label, type, placeholder, autoFocus, required } = setup;
  const [getter, setter] = state;

  return (
    <div className="input-field">
      <label>
        <span>{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={getter}
          autoFocus={autoFocus}
          onChange={(event) => setter(event.target.value)}
          required={required}
        />
      </label>
    </div>
  );
}
