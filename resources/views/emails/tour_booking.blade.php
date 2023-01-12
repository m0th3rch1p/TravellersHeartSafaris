<!DOCTYPE html>
<html>
<head>
    <title>The Traveller's Heart</title>
    <style>
        /* Add your CSS styles here */
        /* Make sure to use CSS that is compatible with email clients */
        /* You can use CSS frameworks such as Foundation for Emails or Ink */
        /* You can also use inline styles for specific elements */
        /* Example: <p style="color: blue;">Some text</p> */
    </style>
</head>
<body>
    <table>
        <tr>
            <td>
                <img src="{{ asset('images/logo.png') }}" alt="Logo">
            </td>
            <td>
                <h1>New Tour Booking:</h1>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <p>Name: {{ $name }}</p>
                <p>Email: {{ $email  }}</p>
                <p>Phone Number: {{ $phoneNumber }}</p>
                <p>Date: {{ $date }}</p>
                <p>No.Of People: {{ $noOfPeople }}</p>
            </td>
        </tr>
    </table>
</body>
</html>
