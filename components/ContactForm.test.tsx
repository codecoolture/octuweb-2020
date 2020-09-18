/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("does not submit the form if some required fields are missing", async () => {
    // Setup
    const spy = jest.fn();
    render(<ContactForm onSubmit={spy} />);

    // Act
    await user.type(screen.getByLabelText(/asunto/i), "Información próximos libros");
    user.click(screen.getByText(/enviar/i));

    // Assert
    await expect(screen.findAllByText("Este campo es obligatorio.")).resolves.toHaveLength(2);
    await waitFor(() => expect(spy).not.toHaveBeenCalled());
  });
});
