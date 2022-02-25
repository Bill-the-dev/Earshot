class User < ApplicationRecord
  after_initialize :ensure_session_token
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  def self.find_by_credentials(username, password)  
    user = User.find_by(username: username)
    
    if user && user.check_password?(password) 
      user 
    else  
      nil
    end 
  end

  def self.generate_session_token
      SecureRandom::urlsafe_base64
  end

  def check_password?(password) 
    password_object = BCrypt::Password.new(self.password_digest) 
    password_object.is_password?(password)  
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end


end
