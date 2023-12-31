import * as React from "react";

import { fireEvent, render } from "@testing-library/react-native";
import { ArrowButton } from "@components/ArrowButton";

jest.mock("native-base", () => ({
  ...jest.requireActual("native-base"),
  NativeBaseConfigProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("ArrowButton", () => {
  it("Should call the onPress function when pressed", () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(<ArrowButton onPress={onPressMock} />);

    const arrowButton = getByTestId("arrow-button");

    fireEvent.press(arrowButton);

    expect(onPressMock).toHaveBeenCalled();
  });
});
