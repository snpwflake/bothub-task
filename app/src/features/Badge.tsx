import styled from "styled-components";

const Badge = styled.div<{ error?: boolean }>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.error
      ? "background-color: rgba(242, 28, 28, 0.2);"
      : "background-color: rgba(28, 100, 242, 0.2);"}
  gap: calc(var(--global-scale) * 8px);
  padding: calc(var(--global-scale) * 4px) calc(var(--global-scale) * 12px);
  border-radius: calc(var(--global-scale) * 14px);
`;

const Spin = styled.div<{}>`
  border-radius: 50%;
  width: calc(var(--global-scale) * 12px);
  aspect-ratio: 1;
  border: calc(var(--global-scale) * 2px) solid transparent;
  border-top: calc(var(--global-scale) * 2px) solid #1c64f2;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Badges = ({
  loading = true,
  error = false,
  text,
}: {
  loading?: boolean;
  error?: boolean;
  text: string;
}) => {
  return (
    <Badge error={error}>
      {loading && <Spin />}
      <span>{text}</span>
    </Badge>
  );
};

export default Badges;
