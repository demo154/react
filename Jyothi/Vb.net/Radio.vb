Public Class RadioCheck
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        If CheckBox1.Checked = True Then
            ListBox1.Items.Add("Paneer Pizza")
            CheckBox1.Checked = False

        End If
        If CheckBox2.Checked = True Then
            ListBox1.Items.Add("Chicken Pizza")
            CheckBox2.Checked = False
        End If
        If CheckBox3.Checked = True Then
            ListBox1.Items.Add("Prawn Pizza")
            CheckBox3.Checked = False
        End If
        If CheckBox4.Checked = True Then
            ListBox1.Items.Add("Mushroom Pizza")
            CheckBox4.Checked = False
        End If
        If CheckBox5.Checked = True Then
            ListBox1.Items.Add("Chocolate Icecream")
            CheckBox5.Checked = False
        End If
        If CheckBox6.Checked = True Then
            ListBox1.Items.Add("Strawberry Icecream")
            CheckBox6.Checked = False






        End If
        If CheckBox7.Checked = True Then
            ListBox1.Items.Add("Vanilla Icecream")
        End If
        If CheckBox8.Checked = True Then
            ListBox1.Items.Add("Choco Waffle")
        End If
        If CheckBox9.Checked = True Then
            ListBox1.Items.Add("Butterscotch Waffle")
        End If
        If CheckBox10.Checked = True Then
            ListBox1.Items.Add("Honey Waffle")
        End If

    End Sub

    Private Sub RadioButton1_CheckedChanged(sender As Object, e As EventArgs) Handles RadioButton1.CheckedChanged
        GroupBox2.Enabled = True
        GroupBox1.Enabled = True
        GroupBox3.Enabled = False
        GroupBox4.Enabled = False


    End Sub

    Private Sub RadioButton2_CheckedChanged(sender As Object, e As EventArgs) Handles RadioButton2.CheckedChanged
        GroupBox3.Enabled = True
        GroupBox1.Enabled = True
        GroupBox2.Enabled = False
        GroupBox4.Enabled = False

    End Sub

    Private Sub RadioButton3_CheckedChanged(sender As Object, e As EventArgs) Handles RadioButton3.CheckedChanged
        GroupBox4.Enabled = True
        GroupBox1.Enabled = True
        GroupBox2.Enabled = False
        GroupBox3.Enabled = False


    End Sub
End Class