<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.components = New System.ComponentModel.Container()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Form1))
        Me.progress = New System.ComponentModel.BackgroundWorker()
        Me.BindingSource1 = New System.Windows.Forms.BindingSource(Me.components)
        Me.Logo = New System.Windows.Forms.Button()
        Me.Moto = New System.Windows.Forms.Button()
        Me.ExitButton = New System.Windows.Forms.Button()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.btnImage = New System.Windows.Forms.Button()
        CType(Me.BindingSource1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'Logo
        '
        Me.Logo.ForeColor = System.Drawing.SystemColors.GrayText
        Me.Logo.Location = New System.Drawing.Point(274, 169)
        Me.Logo.Name = "Logo"
        Me.Logo.Size = New System.Drawing.Size(75, 23)
        Me.Logo.TabIndex = 1
        Me.Logo.Text = "Logo"
        Me.Logo.UseVisualStyleBackColor = True
        '
        'Moto
        '
        Me.Moto.ForeColor = System.Drawing.SystemColors.Highlight
        Me.Moto.Location = New System.Drawing.Point(155, 169)
        Me.Moto.Name = "Moto"
        Me.Moto.Size = New System.Drawing.Size(75, 23)
        Me.Moto.TabIndex = 2
        Me.Moto.Text = "Moto"
        Me.Moto.UseVisualStyleBackColor = True
        '
        'ExitButton
        '
        Me.ExitButton.ForeColor = System.Drawing.SystemColors.InactiveCaptionText
        Me.ExitButton.Location = New System.Drawing.Point(387, 169)
        Me.ExitButton.Name = "ExitButton"
        Me.ExitButton.Size = New System.Drawing.Size(75, 23)
        Me.ExitButton.TabIndex = 3
        Me.ExitButton.Text = "Exit"
        Me.ExitButton.UseVisualStyleBackColor = True
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Cursor = System.Windows.Forms.Cursors.No
        Me.Label1.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.Label1.Font = New System.Drawing.Font("Book Antiqua", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label1.ForeColor = System.Drawing.SystemColors.ActiveCaption
        Me.Label1.Location = New System.Drawing.Point(66, 23)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(56, 18)
        Me.Label1.TabIndex = 4
        Me.Label1.Text = "Tutorial"
        '
        'btnImage
        '
        Me.btnImage.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink
        Me.btnImage.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom
        Me.btnImage.Image = CType(resources.GetObject("btnImage.Image"), System.Drawing.Image)
        Me.btnImage.ImageAlign = System.Drawing.ContentAlignment.TopCenter
        Me.btnImage.Location = New System.Drawing.Point(189, 12)
        Me.btnImage.Name = "btnImage"
        Me.btnImage.RightToLeft = System.Windows.Forms.RightToLeft.Yes
        Me.btnImage.Size = New System.Drawing.Size(273, 118)
        Me.btnImage.TabIndex = 5
        Me.btnImage.UseVisualStyleBackColor = True
        '
        'Form1
        '
        Me.AllowDrop = True
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.None
        Me.BackColor = System.Drawing.SystemColors.Control
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.btnImage)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.ExitButton)
        Me.Controls.Add(Me.Moto)
        Me.Controls.Add(Me.Logo)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle
        Me.Name = "Form1"
        Me.RightToLeft = System.Windows.Forms.RightToLeft.No
        Me.Tag = ""
        Me.Text = "Page"
        Me.TransparencyKey = System.Drawing.Color.DimGray
        CType(Me.BindingSource1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents progress As System.ComponentModel.BackgroundWorker
    Friend WithEvents BindingSource1 As BindingSource
    Friend WithEvents Logo As Button
    Friend WithEvents Moto As Button
    Friend WithEvents ExitButton As Button
    Friend WithEvents Label1 As Label
    Friend WithEvents btnImage As Button
End Class
