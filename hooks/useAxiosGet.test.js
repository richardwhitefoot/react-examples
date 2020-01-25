import { renderHook, act } from "@testing-library/react-hooks";
import axiosMock from "axios";
import useAxiosGet from "./useAxiosGet";
jest.mock("axios");


it("should set loading property", async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { name: "abc" } });
  const { result } = renderHook(() => useAxiosGet("uri"));
  await act(async () => {
    expect(result.current.loading).toBe(true);
  });
});

it("should set data property", async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { name: "abc" } });
  const { result, waitForNextUpdate } = renderHook(() => useAxiosGet("uri"));
  await act(async () => {
    await waitForNextUpdate();
  });
  expect(result.current.data.name).toBe("abc");
});

it("should set handle async errors by setting the error property", async () => {
  axiosMock.get.mockRejectedValueOnce(new Error("Error"));
  const { result, waitForNextUpdate } = renderHook(() => useAxiosGet("uri"));
  await act(async () => {
    await waitForNextUpdate();
  });
  expect(result.current.error).toBe(true);
});
